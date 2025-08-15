// server.js
import express from 'express';
import mysql from 'mysql2';
import Sentiment from 'sentiment';

const app = express();
app.use(express.json());

const sentiment = new Sentiment();

// --- Connexion MySQL ---
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sentiments'
});

db.connect(err => {
  if (err) console.error('Erreur connexion MySQL :', err);
  else console.log('✅ Connecté à MySQL');
});

// --- Route pour analyser un commentaire ---
app.post('/api/analyze', (req, res) => {
  const { commentaire } = req.body;
  if (!commentaire) return res.status(400).json({ error: 'Commentaire requis' });

  const result = sentiment.analyze(commentaire);
  let sentimentLabel = 'neutre';
  if (result.score > 0) sentimentLabel = 'positif';
  if (result.score < 0) sentimentLabel = 'négatif';

  db.query(
    'INSERT INTO feedback (commentaire, sentiment, created_at) VALUES (?, ?, NOW())',
    [commentaire, sentimentLabel],
    (err) => {
      if (err) {
        console.error('Erreur insertion MySQL :', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
      res.json({ commentaire, sentiment: sentimentLabel });
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));

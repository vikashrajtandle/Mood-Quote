# MoodQuote 🎭  
*A mood-based inspirational quote web app built with Flask and MySQL.*

---

## 📌 Overview
MoodQuote is a simple yet powerful web application that delivers personalized quotes based on the user's **mood** and **intensity level**. The app helps users stay motivated and inspired by providing quotes tailored to their emotions.

---

## ✨ Features
✅ Select mood (e.g., Happy, Sad, Motivated)  
✅ Choose intensity level (1–3) for personalized quotes  
✅ Dynamic navigation using Flask routes  
✅ MySQL integration for storing and fetching categorized quotes  
✅ Responsive and clean UI  

---

## 🛠 Tech Stack
- **Backend:** Python (Flask)
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript (Bootstrap)

---

## 🚀 How It Works
1. User selects a mood.
2. Chooses an intensity level (1, 2, or 3).
3. App fetches a matching quote from the MySQL database.
4. Displays the quote dynamically on the result page.

---

## 📂 Project Structure
```
MoodQuote/
├── app.py
├── requirements.txt
├── templates/       # HTML templates
├── static/          # JS, CSS, assets
└── README.md
```

---

## ▶️ Installation & Setup
1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/MoodQuote.git
   cd MoodQuote
   ```
2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```
3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
4. **Set up MySQL database**
   - Create a database `myapp`.
   - Create a table `quotes`:
     ```sql
     CREATE TABLE quotes (
         id INT AUTO_INCREMENT PRIMARY KEY,
         mood VARCHAR(50),
         level INT,
         quotes TEXT
     );
     ```
   - Insert sample quotes for different moods and levels.
5. **Run the app**
   ```bash
   python app.py
   ```
6. Open in browser:
   ```
   http://127.0.0.1:5000/
   ```

---

## 🔮 Future Enhancements
- Add user login & favorites feature
- API integration for more quotes
- Dark mode support
- Deploy to Heroku or Render
- AI based quote selector

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License
This project is licensed under the MIT License.

# Personal Portfolio Website

This is a modern, responsive portfolio website showcasing my data analytics and engineering projects, technical skills, and professional experience.

## Live Demo
[View Live Site](https://bzamoram.vercel.app/) 

## About
This portfolio highlights my work in data engineering, business intelligence, and cloud computing. It features interactive project showcases, a comprehensive skills section, and a contact form for professional inquiries.

## ✨ Features
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation** - Smooth scrolling and floating navigation bar
- **Project Showcase** - Detailed cards featuring ETL pipelines, BI dashboards, and data analytics projects
- **Skills Visualization** - Organized display of technical competencies
- **Contact Form** - JavaScript-powered form with Supabase (PostgreSQL) database integration
- **Professional Layout** - Clean, modern UI with custom CSS styling

## Technologies Used

### Frontend
- HTML5
- CSS3 (Custom styling with Montserrat font)
- JavaScript (ES6+)

### Backend
- Supabase (PostgreSQL database)
- REST API integration

### Tools & Platforms
- Git & GitHub for version control
- Vercel for deployment
- Supabase for database hosting

## Want to get started with a portfolio to showcase your work and skills?

### Prerequisites
- Web browser
- Git
- Supabase account (free)
- Vercel account (free)

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/bzamoram/personal-website.git
cd personal-website
```

2. **Set up Supabase database**
- Sign up at supabase.com
- Create a new project
- In SQL Editor, run this query:

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enabling Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Creating policy to allow inserts
CREATE POLICY "Enable insert for contact form" ON contacts
  FOR INSERT
  WITH CHECK (true);

```

3. **Configure Supabase credentials**
- Get your Project URL and `anon` key from Supabase Settings → API
- Edit `assets/js/contact-form.js` and replace:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

```

4. **Run Locally**
- Simply open `index.html` in your web browser
- Or use a local server like Live Server (VS Code extension)
- The contact form will work immediately with your Supabase database!

5. **Deploy to Vercel (Optional)**
- Push your code to GitHub
- Go to vercel.com and import your repository
- Your site will be live instantly!

## Contact 
- Email: bzamoramontero35@gmail.com
- LinkedIn: https://www.linkedin.com/in/bzamoram/
- GitHub: @bzamoram
- Portfolio: https://bzamoram.vercel.app/

## License
This project is open source and available under the MIT License.

## 🙏 Acknowledgments
- Google Fonts for Montserrat typography
- Concordia College for project opportunities
- Open source community for inspiration and resources

Built with ❤️ by Bryan Zamora Montero, 2026
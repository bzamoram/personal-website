# Personal Portfolio Website

This is a modern, responsive portfolio website showcasing my data analytics and engineering projects, technical skills, and professional experience.

## Live Demo
[View Live Site](https://personal-website-bzamoram.vercel.app) *(coming soon)*

## About
This portfolio highlights my work in data engineering, business intelligence, and cloud computing. It features interactive project showcases, a comprehensive skills section, and a contact form for professional inquiries.

## ✨ Features
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation** - Smooth scrolling and floating navigation bar
- **Project Showcase** - Detailed cards featuring ETL pipelines, BI dashboards, and data analytics projects
- **Skills Visualization** - Organized display of technical competencies
- **Contact Form** - PHP-powered form with MySQL database integration
- **Professional Layout** - Clean, modern UI with custom CSS styling

## Technologies Used

### Frontend
- HTML5
- CSS3 (Custom styling with Montserrat font)
- JavaScript (ES6+)

### Backend
- PHP 7+
- MySQL Database

### Tools & Platforms
- Git & GitHub for version control
- XAMPP for local development
- Vercel for deployment *(planned)*

## Want to get started with a portfolio to showcase your work and skills?

### Prerequisites
- XAMPP (or similar local server with PHP and MySQL)
- Web browser
- Git

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/bzamoram/personal-website.git
cd personal-website
```

2. **Set up database**
- Start XAMPP and run Apache + MySQL
- Create a database named `portfolio_db`
- Import the SQL schema (or create contacts table):

```sql
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. **Configure database connection**
- Edit `db_connect.php` with your database credentials

```php
$host = 'localhost';
$dbname = 'portfolio_db';
$username = 'root';
$password = '';
```

4. **Run Locally**
- Place folder in C:\xampp\htdocs\portfolio
- Open browser and navigate to http://localhost/portfolio

## Contact 
- Email: bzamoramontero35@gmail.com
- LinkedIn: https://www.linkedin.com/in/bzamoram/
- GitHub: @bzamoram
- Portfolio: [Coming Soon on Vercel]

## License
This project is open source and available under the MIT License.

## 🙏 Acknowledgments
- Google Fonts for Montserrat typography
- Concordia College for project opportunities
- Open source community for inspiration and resources

Built with ❤️ by Bryan Zamora Montero, 2026
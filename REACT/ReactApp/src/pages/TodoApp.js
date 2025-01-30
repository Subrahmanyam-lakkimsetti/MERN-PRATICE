import { useState } from 'react';
import Tododisplay from '../components/Tododisplay';
import Todoinput from '../components/Todoinput';
import Todofilter from '../components/Todofilter';
import { Link } from 'react-router';
import '../components/Tododisplay.css';

const Todoapp = () => {
  const assignments = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
  const [taskdooer, settaskdooer] = useState('');
  const [date, setdate] = useState('');

  const [data, setdata] = useState([
    {
      name: 'Documentation Update',
      description: 'Complete the project documentation with new features.',
      date: '2025-02-01',
      assignment: 'Alice',
    },
    {
      name: 'Landing Page Design',
      description: 'Design the landing page with the new branding.',
      date: '2025-02-02',
      assignment: 'Bob',
    },
    {
      name: 'Login Bug Fix',
      description: "Fix the bug where users can't log in on mobile.",
      date: '2025-02-03',
      assignment: 'Charlie',
    },
    {
      name: 'Database Schema Setup',
      description: 'Set up the new database schema for the app.',
      date: '2025-02-04',
      assignment: 'Dave',
    },
    {
      name: 'Code Review for Feature X',
      description: 'Review the code submitted for Feature X.',
      date: '2025-02-05',
      assignment: 'Eve',
    },
    {
      name: 'Unit Tests for Module A',
      description: 'Write unit tests for the core module of the application.',
      date: '2025-02-06',
      assignment: 'Alice',
    },
    {
      name: 'Third-Party API Integration',
      description: 'Integrate the new payment gateway API.',
      date: '2025-02-07',
      assignment: 'Bob',
    },
    {
      name: 'Project Presentation Preparation',
      description: 'Prepare the presentation for the client meeting.',
      date: '2025-02-08',
      assignment: 'Charlie',
    },
    {
      name: 'Authentication System Refactor',
      description: 'Refactor the authentication system to support OAuth.',
      date: '2025-02-09',
      assignment: 'Dave',
    },
    {
      name: 'Test Cases for Feature Y',
      description: 'Write test cases to cover Feature Y.',
      date: '2025-02-10',
      assignment: 'Eve',
    },
    {
      name: 'Payment Gateway Debugging',
      description: 'Debug issues with the payment gateway.',
      date: '2025-02-11',
      assignment: 'Alice',
    },
    {
      name: 'User Dashboard Design',
      description: 'Design the new user dashboard with better UX.',
      date: '2025-02-12',
      assignment: 'Bob',
    },
    {
      name: 'Database Query Optimization',
      description: 'Optimize database queries for faster data retrieval.',
      date: '2025-02-13',
      assignment: 'Charlie',
    },
    {
      name: 'API Documentation Update',
      description: 'Update API documentation to reflect the latest changes.',
      date: '2025-02-14',
      assignment: 'Dave',
    },
    {
      name: 'Security Patch Review',
      description: 'Review and approve new security patches.',
      date: '2025-02-15',
      assignment: 'Eve',
    },
    {
      name: 'Responsive Design Implementation',
      description: 'Ensure the website is fully responsive for mobile users.',
      date: '2025-02-16',
      assignment: 'Alice',
    },
    {
      name: 'Performance Optimization',
      description: 'Work on improving the performance of the application.',
      date: '2025-02-17',
      assignment: 'Bob',
    },
    {
      name: 'Weekly Report Preparation',
      description: 'Prepare the weekly report for the project progress.',
      date: '2025-02-18',
      assignment: 'Charlie',
    },
    {
      name: 'CI/CD Pipeline Setup',
      description:
        'Set up continuous integration and continuous deployment pipelines.',
      date: '2025-02-19',
      assignment: 'Dave',
    },
    {
      name: 'Code Review for Module B',
      description: 'Assist with code review for Module B.',
      date: '2025-02-20',
      assignment: 'Eve',
    },
    {
      name: 'API Versioning Strategy',
      description: 'Establish a versioning strategy for the API.',
      date: '2025-02-21',
      assignment: 'Alice',
    },
    {
      name: 'User Authentication Enhancement',
      description:
        'Improve user authentication flow with multi-factor authentication.',
      date: '2025-02-22',
      assignment: 'Bob',
    },
    {
      name: 'Design Sprint Planning',
      description: 'Plan the design sprint for the next quarter.',
      date: '2025-02-23',
      assignment: 'Charlie',
    },
    {
      name: 'Server Load Testing',
      description: 'Conduct load testing on the server to handle more users.',
      date: '2025-02-24',
      assignment: 'Dave',
    },
    {
      name: 'Frontend Refactor',
      description: 'Refactor the frontend codebase for better maintainability.',
      date: '2025-02-25',
      assignment: 'Eve',
    },
    {
      name: 'Security Audit',
      description: 'Conduct a security audit for the application.',
      date: '2025-02-26',
      assignment: 'Alice',
    },
    {
      name: 'App Store Submission',
      description: 'Prepare the app for submission to the app store.',
      date: '2025-02-27',
      assignment: 'Bob',
    },
    {
      name: 'User Feedback Analysis',
      description: 'Analyze user feedback to improve product features.',
      date: '2025-02-28',
      assignment: 'Charlie',
    },
    {
      name: 'Automated Test Setup',
      description: 'Set up automated tests for the entire project.',
      date: '2025-03-01',
      assignment: 'Dave',
    },
    {
      name: 'Database Migration',
      description: 'Migrate the existing database to the new version.',
      date: '2025-03-02',
      assignment: 'Eve',
    },
    {
      name: 'Marketing Landing Page',
      description: 'Develop a marketing landing page for the new product.',
      date: '2025-03-03',
      assignment: 'Alice',
    },
    {
      name: 'Bug Fixes for Beta Version',
      description:
        'Fix critical bugs identified during the beta testing phase.',
      date: '2025-03-04',
      assignment: 'Bob',
    },
    {
      name: 'Client Feedback Presentation',
      description:
        'Create a presentation based on client feedback for future development.',
      date: '2025-03-05',
      assignment: 'Charlie',
    },
    {
      name: 'App Performance Profiling',
      description: 'Profile the app to find performance bottlenecks.',
      date: '2025-03-06',
      assignment: 'Dave',
    },
    {
      name: 'Feature Z Implementation',
      description: 'Implement Feature Z requested by the client.',
      date: '2025-03-07',
      assignment: 'Eve',
    },
  ]);

  return (
    <>
      <h3 className="Nav">
        <Link to="/" className='element'>Home</Link>
      </h3>

      <Todoinput setdata={setdata} assignments={assignments} />
      <Todofilter
        assignment={assignments}
        settaskdooer={settaskdooer}
        setdate={setdate}
      />
      <Tododisplay data={data} dooer={taskdooer} date={date} />
    </>
  );
};

export default Todoapp;

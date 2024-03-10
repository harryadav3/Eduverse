# Internship Assignment - Backend

**Problem statement:**

### Design database and APIs for application based courses on Airtribe.

Database relations:

- There are multiple instructors on Airtribe.
- Every instructor can start multiple courses.
- Multiple learners can apply for a course using application form (Leads)
- Instructor can add comments against every lead

1. Design the above relationships on any SQL database.
2. Create a server in any of your favourite framework using Node.js and add the following APIs
    1. Create course API
    2. Update course details API (name, max_seats, start_date etc)
    3. Course registration API (A user can apply for a course by sharing their name, email, phone number and LinkedIn profile)
    4. Lead update API (Instructor can change status of the lead (Accept / Reject / Waitlist))
    5. Lead search API (Instructor can search leads by name or email)
    6. Add comment API

**How to submit:**  

- (Good to have) Dockerize your server and database.
- Mention the following steps in README:
    - Docker command(s) or scripts to spin up the environment.
    - A script to load test-data (if any).

**Your submission will be judged based on:**

- Code Quality (Clean, Readable, Easy to follow)
- Language specific best practices
- Modularity
- README and Git commits



### Designing the SQL Database:

First, let's design the tables based on the given relationships:

###### Instructors
# Internship Assignment - Backend

## Problem statement:

### Design database and APIs for application based courses on Airtribe.

**Database relations:**

- There are multiple instructors on Airtribe.
- Every instructor can start multiple courses.
- Multiple learners can apply for a course using application form (Leads)
- Instructor can add comments against every lead

## Designing the SQL Database:

First, let's design the tables based on the given relationships:

### Instructors

- instructor_id (Primary Key)
- name
- email
- other relevant details

### Courses

- course_id (Primary Key)
- instructor_id (Foreign Key referencing Instructors)
- name
- max_seats
- start_date
- other relevant details

### Leads

- lead_id (Primary Key)
- course_id (Foreign Key referencing Courses)
- name
- email
- phone_number
- linkedin_profile
- status (e.g., accepted, rejected, waitlisted)
- other relevant details

### Comments

- comment_id (Primary Key)
- lead_id (Foreign Key referencing Leads)
- instructor_id (Foreign Key referencing Instructors)
- comment_text
- timestamp
- other relevant details

## Creating APIs using Node.js:

You've already Dockerized the application and set up TypeScript. Now, let's create the APIs using your favorite Node.js framework (e.g., Express.js):

### **Create Course API**:

Endpoint: POST /courses
Request Body: { name, instructor_id, max_seats, start_date, other relevant details }
Action: Creates a new course in the database.

### **Update Course Details API**:

Endpoint: PUT /courses/:course_id
Request Body: { name, max_seats, start_date, other relevant details }
Action: Updates the details of a specific course.

### **Course Registration API**:

Endpoint: POST /courses/:course_id/register
Request Body: { name, email, phone_number, linkedin_profile }
Action: Allows a user to apply for a course by providing their details.

### **Lead Update API**:

Endpoint: PUT /leads/:lead_id
Request Body: { status }
Action: Updates the status of a lead (e.g., accept, reject, waitlist).

### **Lead Search API**:

Endpoint: GET /leads?search=name_or_email
Action: Allows an instructor to search leads by name or email.

### **Add Comment API**:

Endpoint: POST /leads/:lead_id/comments
Request Body: { instructor_id, comment_text }
Action: Allows an instructor to add a comment to a lead.

## Submission Requirements:

In your README.md file:

- Provide Docker command(s) or scripts to spin up the environment.
- Include a script to load test data if applicable.
- Ensure your code meets the criteria for judging: code quality, language-specific best practices, modularity, and clear README and Git commits.

By following these steps, you'll have a well-designed SQL database and a set of APIs to manage courses, registrations, leads, and comments in your Airtribe application.
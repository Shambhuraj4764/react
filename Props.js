import React from 'react';

// Example 1: Greeting Component
function Greeting() {
  return <Welcome name='Shambhuraj' age={21} />;
}

const Welcome = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <h3>Your age is {props.age}</h3>
    </div>
  );
};

// Example 2: Product Display
function ProductDisplay() {
  return <Product name='Laptop' price={50000} />;
}

const Product = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Price: ₹{props.price}</p>
    </div>
  );
};

// Example 3: User Profile
function UserProfile() {
  return <User username='Shambhuraj' city='Kolhapur' />;
}

const User = (props) => {
  return (
    <div>
      <h2>User: {props.username}</h2>
      <p>Location: {props.city}</p>
    </div>
  );
};

// Example 4: Student Details
function StudentDetails() {
  return <Student name='Aditya' grade='A+' />;
}

const Student = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Grade: {props.grade}</p>
    </div>
  );
};

// Example 5: Car Component
function CarInfo() {
  return <Car brand='mustang' model='Shelby' />;
}

const Car = (props) => {
  return (
    <div>
      <h2>{props.brand}</h2>
      <p>Model: {props.model}</p>
    </div>
  );
};

// Example 6: Job Posting
function JobInfo() {
  return <Job title='Developer' company='Microsoft' />;
}

const Job = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Company: {props.company}</p>
    </div>
  );
};

// Example 7: Simple Bio
function Bio() {
  return <Person name='Shubham' hobby='Traveling' />;
}

const Person = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
};

// Example 8: Task Component
function TaskDetails() {
  return <Task name='Shopping' status='Pending' />;
}

const Task = (props) => {
  return (
    <div>
      <h3>Task: {props.name}</h3>
      <p>Status: {props.status}</p>
    </div>
  );
};

// Main App Component
function Props() {
  return (
    <div>
      <Greeting />
      <ProductDisplay />
      <UserProfile />
      <StudentDetails />
      <CarInfo />
      <JobInfo />
      <Bio />
      <TaskDetails />
    </div>
  );
}

export default Props;
# Types of Testing

There are many types of testing, and some overlap between them. Here are a few key types:

### Smoke Testing

Smoke testing is quickly running through the application to spot obvious flaws. Every time you complete a significant change, you should take a look at any areas that may be affected.

### System & Regression Testing

System testing is comprehensively using the app with different inputs to trigger bugs if possible. Regression testing is similar, but focuses on areas of the app related to recent changes. Both of these can be very time-consuming, but can be automated using tools like Selenium (which can be programmed using JavaScript). This is often the domain of a separate QA (Quality Assurance) role, which is distinct from actual development but uses a lot of the same skills. 

Delving into automated testing can offer insight for a developer, unlock powerful tools for automating repetitive administrative processes and data mining, or even open up a career in QA engineering. You might consider exploring this topic in the future, but that isn't what we're focusing on in these lessons.

### Unit & Integration Testing:

Unit testing is isolating a particular function and running it with a variety of inputs to confirm that it behaves correctly. Integration testing is similar, but rather than isolating a section of code, it checks that different parts of the system work together properly. 

We can write simple unit tests ourselves using basic JavaScript, but to implement robust testing needed for business software and websites it's far better to use a standard system. For JavaScript, we use a node package called Jest. The following lessons will focus on Jest unit testing. 
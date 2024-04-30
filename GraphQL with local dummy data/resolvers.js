const { v4: uuidv4 } = require('uuid');

class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssists }
  ) {
    this.id = id;
    this.courseName = courseName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.email = email;
    this.stack = stack;
    this.teachingAssists = teachingAssists;
  }
}

const courseholder = {};

const resolvers = {
    getCourse: ({ id }) => {
      return new Course(id, courseholder[id]);
    },
    createCourse: ({ input }) => {
      try {
        let id = uuidv4();
        courseholder[id] = input;
        console.log(courseholder)
        return new Course(id, input);
      } catch (error) {
        console.error("Error creating course:", error);
        throw new Error("Failed to create course");
      }
    },
};

module.exports = resolvers;

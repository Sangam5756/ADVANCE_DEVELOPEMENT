## Normalization in a Database

- the process of organizing the attributes and tables of a relational database to minimize redundancy and dependency. The goal of normalization is to ensure that the database structure is efficient, consistent, and free from undesirable characteristics like data anomalies (insert, update, and delete anomalies).

### **The Story of a School Database**

Imagine we are building a database for a school that tracks students, their courses, and teachers. We'll go through each step of normalization using tables to organize the data properly.

### Step 1: **First Normal Form (1NF)**

**Goal**: Each column should contain atomic values (no lists or multiple values in a column).

**Story**: We initially create a table where each student has a list of courses in one column. This is not in **1NF** because the "Courses" column contains multiple values.

**Before 1NF**:

| Student_ID | Name  | Courses          |
| ---------- | ----- | ---------------- |
| 1          | Alice | Math, Science    |
| 2          | Bob   | English, History |

Here, Alice and Bob have multiple courses listed in a single column. This can cause problems when trying to search for a specific course or update information.

**After 1NF** (We split the multi-valued "Courses" column into individual rows):

| Student_ID | Name  | Course  |
| ---------- | ----- | ------- |
| 1          | Alice | Math    |
| 1          | Alice | Science |
| 2          | Bob   | English |
| 2          | Bob   | History |

Now, each course is in its own row, and the database is in **1NF**.

---

### Step 2: **Second Normal Form (2NF)**

**Goal**: The table should already be in **1NF**, and all non-key attributes must depend entirely on the primary key (i.e., no partial dependencies).

**Story**: We decide that the combination of `Student_ID` and `Course` will be the primary key. However, we notice that the `Name` column only depends on the `Student_ID`, not on the `Course`. This violates **2NF** because `Name` should not depend on the full composite key (`Student_ID`, `Course`), but only on `Student_ID`.

**Before 2NF**:

| Student_ID | Course  | Name  |
| ---------- | ------- | ----- |
| 1          | Math    | Alice |
| 1          | Science | Alice |
| 2          | English | Bob   |
| 2          | History | Bob   |

To fix this, we split the table into two: one for students and one for student-course associations.

**Students Table** (Contains information about students):

| Student_ID | Name  |
| ---------- | ----- |
| 1          | Alice |
| 2          | Bob   |

**Student_Courses Table** (Contains the relationship between students and courses):

| Student_ID | Course  |
| ---------- | ------- |
| 1          | Math    |
| 1          | Science |
| 2          | English |
| 2          | History |

Now, the **Students Table** contains only the `Student_ID` and `Name`, and the **Student_Courses Table** contains the relationship between students and their courses.

---

### Step 3: **Third Normal Form (3NF)**

**Goal**: The table should be in **2NF**, and all non-key attributes should be non-transitively dependent on the primary key (no transitive dependencies).

**Story**: We now introduce a new column called `Department`, which tells us the department in which each course is taught. However, we notice that `Department` depends on the `Course`, not on the `Student_ID`. This creates a **transitive dependency**: `Student_ID` → `Course` → `Department`.

**Before 3NF**:

| Student_ID | Course  | Department |
| ---------- | ------- | ---------- |
| 1          | Math    | Science    |
| 1          | Science | Science    |
| 2          | English | Arts       |
| 2          | History | Arts       |

To fix this, we create a new table for courses and move the `Department` information there.

**Courses Table** (Contains information about courses):

| Course  | Department |
| ------- | ---------- |
| Math    | Science    |
| Science | Science    |
| English | Arts       |
| History | Arts       |

Now, the **Student_Courses Table** will only contain `Student_ID` and `Course`, and the `Department` information is handled by the **Courses Table**.

**Updated Tables**:

**Students Table**:
| Student_ID | Name |
|------------|--------|
| 1 | Alice |
| 2 | Bob |

**Courses Table**:
| Course | Department |
|------------|------------|
| Math | Science |
| Science | Science |
| English | Arts |
| History | Arts |

**Student_Courses Table**:
| Student_ID | Course |
|------------|------------|
| 1 | Math |
| 1 | Science |
| 2 | English |
| 2 | History |

---

### Step 4: **Boyce-Codd Normal Form (BCNF)**

**Goal**: Every functional dependency in the table must have a superkey on the left-hand side.

**Story**: Imagine a scenario where we have a table where both `Teacher_ID` and `Course_ID` together form the primary key, and we store the teacher’s name as well. However, a teacher can only teach one course, so knowing the teacher's ID alone is enough to determine the course they teach. This violates BCNF, because `Teacher_ID` → `Course` is a functional dependency, but `Teacher_ID` is not a superkey.

**Before BCNF**:

| Teacher_ID | Course  | Teacher_Name |
| ---------- | ------- | ------------ |
| 101        | Math    | Mr. Smith    |
| 102        | Science | Mr. Johnson  |

**After BCNF** (We separate out the teacher information):

**Teachers Table**:
| Teacher_ID | Teacher_Name |
|------------|--------------|
| 101 | Mr. Smith |
| 102 | Mr. Johnson |

**Courses Table**:
| Course | Teacher_ID |
|------------|------------|
| Math | 101 |
| Science | 102 |

Now, the **Teachers Table** and **Courses Table** are both in BCNF.

---

### Step 5: **Fourth Normal Form (4NF)**

**Goal**: Eliminate multi-valued dependencies.

**Story**: Let's say that a student can participate in multiple sports and also have multiple hobbies. If we store both sports and hobbies in the same table, it leads to a **multi-valued dependency**.

**Before 4NF**:

| Student_ID | Sports     | Hobbies  |
| ---------- | ---------- | -------- |
| 1          | Football   | Reading  |
| 1          | Basketball | Painting |

Here, both sports and hobbies are multi-valued, leading to redundancy. We separate them into two tables.

**Sports Table**:
| Student_ID | Sports |
|------------|------------|
| 1 | Football |
| 1 | Basketball |

**Hobbies Table**:
| Student_ID | Hobbies |
|------------|-------------|
| 1 | Reading |
| 1 | Painting |

---

### Step 6: **Fifth Normal Form (5NF)**

**Goal**: Eliminate join dependencies.

**Story**: We have a scenario where a student can take courses from different departments, and we store all this information in one table. If we later need to combine data from multiple tables and face redundant joins, it may lead to unnecessary complexity.

This can be addressed by separating such data into multiple tables, ensuring that every table can be joined with others logically without redundant data.

---

### Conclusion

**Normalization** ensures that the database is structured logically, with minimal redundancy and dependency. It simplifies updates, improves data integrity, and optimizes the storage. By following these steps from **1NF** to **5NF**, the data becomes more organized, accurate, and flexible.

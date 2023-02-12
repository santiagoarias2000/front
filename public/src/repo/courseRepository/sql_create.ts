export const SQL_COURSE_CREATE = {
  CREATE:
    "INSERT INTO course(type_course,price) values($1, $2) RETURNING id_course",
  CONFIRMCOURSE:
    "SELECT COUNT(id_course) AS amount\
    FROM course \
    WHERE type_course=$1",
};

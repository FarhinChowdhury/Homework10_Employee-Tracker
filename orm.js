
const mysql = require( 'mysql' );


// use this wrapper to create promise around mysql
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args=[] ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
  }
// at top INIT DB connection
const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "cms_db"
  });

function viewDepartments(){
    return db.query(`SELECT * FROM department`)
}

function viewRoles(){
    return db.query(`SELECT * FROM roles`)

}

function viewEmployees(){
    return db.query(`SELECT * FROM employees`)
}

function addDepartment(department_name){
    return db.query (`INSERT INTO department(department_name) VALUES('${department_name}')`)
}
function addRole(title, salary, department_id){
    return db.query (`INSERT INTO roles(title, salary, department_id) VALUES('${title}', ${salary},${department_id})`)
}
function addEmployee(first_name, last_name, role_id, manager_id){
    return db.query (`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES('${first_name}', '${last_name}',${role_id}, ${manager_id})`)
}

function updateEmployeeRoles(id, role_id, manager_id){
    const updatedEmp = `UPDATE employees SET role_id = ${role_id}, manager_id= ${manager_id} WHERE id = ${id}`
    
    return db.query(updatedEmp)
}

function deleteEmployee(employeeId){
    return db.query(`DELETE FROM employees WHERE id=${employeeId}`)
}
function deleteRole(role_title){
    return db.query(`DELETE FROM roles WHERE title='${role_title}'`)
}

function deleteDepartment(department_name){
    return db.query(`DELETE FROM department WHERE department_name='${department_name}'`)
}

function getEmployeesByManager(manager_id){
    return db.query(`SELECT * FROM employees WHERE manager_id=${manager_id}`)
}

function closeDb(){
    return db.close()
}

module.exports = 
{viewDepartments,
viewRoles, 
viewEmployees, 
addDepartment, 
addRole,
addEmployee, 
updateEmployeeRoles, 
deleteEmployee,
deleteRole,
deleteDepartment,
getEmployeesByManager,
closeDb}

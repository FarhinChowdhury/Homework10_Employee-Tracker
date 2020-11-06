const orm = require( './orm' );
const inquirer = require('inquirer')

async function main(){
    
     const action = await inquirer.prompt([
        {
            type:'list',
            name: 'task',
            message:'choose your action:',
            choices:['View all Departments','View all Roles','View all Employees','Add Employee', 'Add Role', 'Add Department', 'Update Employee Role']
        }
        ])

    let result 
    switch(action.task){
        case 'View all Departments':
            result = await orm.viewDepartments()
            break;
        case 'View all Roles':
            result = await orm.viewRoles()
            break;
        case 'View all Employees':
            result = await orm.viewEmployees()
            break;
        case 'Add Employee':
            let newEmployee =await inquirer.prompt([
                {
                    type:'input',
                    name:'firstName',
                    message:"What is the Employee's First Name?",
                },
                {
                    type:'input',
                    name:'lastName',
                    message:"What is the Employee's Last Name?",
                },
                {
                    type:'input',
                    name:'roleId',
                    message:"What is the Employee's role ID?",
                },
                {
                    type:'input',
                    name:'managerId',
                    message:"What is the Employee's manager ID?",
                },

            ])

            let role_id = parseInt(newEmployee.roleId)
            let manager_id =parseInt(newEmployee.managerId)
            result = await orm.addEmployee(newEmployee.firstName, newEmployee.lastName, role_id,manager_id)
            console.log(`New employee Added:`, newEmployee)
            break;
        
        case 'Add Role':
            let newRole = await inquirer.prompt([
                {
                    type:'input',
                    name:'title',
                    message:'What is the title of the new role?'
                },
                {
                    type:'input',
                    name:'salary',
                    message:'What is the salary of this new role?'
                },
                {
                    type:'input',
                    name:'departmentID',
                    message:'What is the department ID of this role?'
                }
            ])
            let department_id = parseInt(newRole.departmentID)
            result = await orm.addRole(newRole.title, newRole.salary, department_id)
            console.log(`new role added!`,newRole)
            break;
        
        case 'Add Department':
            let newDep = await inquirer.prompt([
                {
                    type:'input',
                    name:'departmentName',
                    message:'What is the name of this new department?'
                }
            ])

            result = await orm.addDepartment(newDep.departmentName)
            console.log(`New Department Added`, newDep)
            break;   
    
    

    }
    console.table(result)

    await orm.closeDb()

    

}

main()
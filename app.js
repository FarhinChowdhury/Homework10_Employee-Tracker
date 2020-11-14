const orm = require( './orm' );
const inquirer = require('inquirer')

let action = ""

async function main(){
    console.log(`Welcome to the Employe Managementment System`)

    while(true){

    
     action = await inquirer.prompt([
        {
            type:'list',
            name: 'task',
            message:'choose your action:',
            choices:
            ['View all Departments',
            'View all Roles',
            'View all Employees',
            'Add Employee', 
            'Add Role', 
            'Add Department', 
            'Update Employee Role',
            'Get Employee by Manager',
            'Delete Employee',
            'Delete Role',
            'Delete Department'
        ]
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
        case 'Delete Employee':
            let employeeId= await inquirer.prompt([
                {
                    type:'input',
                    name:'deleteEmployee',
                    message: "What is the id of the employee you want to remove?"
                }
            ])
            result = await orm.deleteEmployee(employeeId.deleteEmployee)
            console.log(`Employee Removed.`)
            break;
        case 'Update Employee Role':
            let info = await inquirer.prompt([
                {
                    type:'input',
                    name:'employeeId',
                    message: "What is the id of the employee you want to update?"
                },
                {
                    type:'input',
                    name:'roleId',
                    message: "What is the id of the employee you want to update?"
                },
                {
                    type:'input',
                    name:'managerId',
                    message: "What is the id of the employee you want to update?"
                }
            ]) 
            result = await orm.updateEmployeeRoles(info.employeeId, info.roleId, info.managerId)
            console.log(`Employee updated! You can check the Employee list to check the update.`, )
            break;
        case 'Delete Role':
            let title= await inquirer.prompt([
                {
                    type:'input',
                    name:'deleteRole',
                    message: "What is the title of the role you would like to remove?"
                }
            ])
            result = await orm.deleteRole(title.deleteRole)
            console.log(`Role Removed.`)
            break;
        case 'Delete Department':
            let department= await inquirer.prompt([
                {
                    type:'input',
                    name:'deleteDep',
                    message: "What is the department name you would like to remove?"
                }
            ])
            result = await orm.deleteDepartment(department.deleteDep)
            break;
        case 'Get Employee by Manager':
            let managerId= await inquirer.prompt([
                {
                    type:'input',
                    name:'displayEmployee',
                    message: "What is the manager id of the employees you are retreiving?"
                }
            ])
            result = await orm.getEmployeesByManager(managerId.displayEmployee)

        default:
            break;

    }
    console.table(result)
    action= await inquirer.prompt([{
        type:"confirm",
        name:"choice",
        message: "would you like to continue?"
    }])
  

    if(!action.choice){
        orm.closeDb() 
        console.log(`Thank you for using this program!`)
       process.exit
    }
    }
    


    
}

main()
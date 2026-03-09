
                      // TODO: Export these validation functions 
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) { 
                      
                         
                        if(!title)
                        {
                           return "enter title"
                        }
                         else if(title.length <  3)
                         {
                            return " not valid"
                         }
                         else 
                         {
                            return "valid"
                         }
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        if(priority == "Low"|| priority == "Medium" || priority == "High")
                        {
                            return "valid"
                        }
                        return "not validate "
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {

                        const duedate = new Date(date);
                        const today = new Date();
                        if(today > duedate)
                        {
                            return "invalid date"
                        }
                        return "valid"
                        
                      }
export { validateTitle, validatePriority, validateDueDate };
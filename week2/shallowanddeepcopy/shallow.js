   const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

    //  1. Create a shallow copy of user
    let copy = {...user}
    // 2. Change:
    //       i. name in the copied object 
             console.log("original ",user)
             copy.name = 'vinya'

    //       ii. preferences.theme in the copied object
              copy.preferences.theme = "white"
              console.log("copy version ",copy)
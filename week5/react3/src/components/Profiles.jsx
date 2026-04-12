import Profile from "./Profile"

function Profiles(){
  const profiles = [
    {
      id: 1,
      title: "News App using ReactJS (Parsing XML RSS feed to JSON)",
      description: "News App using ReactJS (Parsing XML to JSON) Photo by Christina Morillo from Pexels/Live Demo:",
      image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
      author: "Mehul Kohli",
      date: "Aug 12, 2020 04:22",
      authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
    },
    {
      id: 2,
      title: "Medium Like Blogging App Using Angular 9 and Firebase",
      description: "Creating a Medium Like Blog App Using Angular 9 and Firebase Photo by Miguel Á. Padrrián from Pexels/Live Demo:",
      image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
      author: "Mehul Kohli",
      date: "Jul 10, 2020 10:59",
      authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
    },
    {
      id: 3,
      title: "COVID-19 Tracker (Statistics) app Using Angular",
      description: "COVID-19 Tracker (Statistics) app Using Angular Dark Mode Demo/Introduction: Everyone is aware",
      image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
      author: "Mehul Kohli",
      date: "Apr 04, 2020 08:46",
      authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
    },
    {
    id: 4,
    title: "E-commerce UI with React and Tailwind CSS",
    description: "A modern e-commerce UI built with React and Tailwind CSS featuring responsive layouts and reusable components.",
    image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
    author: "Arjun Mehta",
    date: "Sep 05, 2020 09:30",
    authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
  },
  {
    id: 5,
    title: "Chat Application using Socket.io and Node.js",
    description: "Real-time chat application using Socket.io with Node.js backend, React frontend,Tailwind CSS and Database MongoDB with Mongoose.",
    image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
    author: "Sneha Reddy",
    date: "Oct 01, 2020 11:15",
    authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
  },
  {
    id: 6,
    title: "Task Manager App with Drag and Drop",
    description: "A Trello-like task manager app with drag-and-drop functionality using React Beautiful DnD.",
    image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
    author: "Rahul Sharma",
    date: "Nov 18, 2020 14:40",
    authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
  },
  {
    id: 7,
    title: "Weather App using OpenWeather API",
    description: "A simple weather app fetching real-time data from OpenWeather API with search functionality.",
    image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
    author: "Priya Nair",
    date: "Dec 22, 2020 07:25",
    authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
  },
  {
    id: 8,
    title: "Portfolio Website with React and Framer Motion",
    description: "Animated portfolio website using React and Framer Motion with smooth transitions.",
    image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
    author: "Karan Patel",
    date: "Jan 10, 2021 16:10",
    authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
  },
  {
    id: 9,
    title: "Authentication System with JWT",
    description: "Secure authentication system using JWT, Node.js, and MongoDB with protected routes.",
    image: "https://imgs.search.brave.com/-MLiGchwEDBCBoDZkQpeizvyViR_fJZ6gC9CiUEV-LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBob3RvLWhk/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
    author: "Ananya Gupta",
    date: "Feb 14, 2021 12:00",
    authorImage: "https://imgs.search.brave.com/U5KgV2lrW0v9DiF-eiKNIXibSpraCiebucTZXIoIW6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTEzMTYwNS9waG90/by9zZW5pb3ItbWFu/LXdpdGgtZGVtZW50/aWEtd3JpdGluZy1p/bi1ub3RlYm9vay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VlFtWk1MMkVUOWdC/OWxuX1duOWtpbVE5/dkVYb2I4OWNDRVpR/WGxmNUU5WT0"
  }
  ];
  return(
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-blue-100">
      {
        profiles.map((profile)=>(
          <Profile profileObj={profile} key={profile.id}/>
        ))
      }
    </div>
  )
}

export default Profiles
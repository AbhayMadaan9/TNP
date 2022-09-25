import React from 'react'
import '../Components_styling/post_style.css'
export default function Post() {
  return (
    <>
    <p id='post'>Create Post</p>
    <div className="container_post">
        
        <form action="/post" method='post'>
            <label htmlFor="">Post type:</label><input type="text" placeholder= 'announcement' name='type' /><br/>
            <label htmlFor="">About Announcement:</label><input type="text" placeholder= 'Regarding anouncement' name='info' /><br/>
            <label htmlFor="">About Company:</label><input type="text" placeholder= 'Name of company..' name='company' /><br/>
            <label htmlFor="">Job Locaion:</label><input type="text" placeholder= 'Location' name='location' /><br/>
            <p><a href="/post">Submit</a></p>
        </form>
    </div>
    </>
  )
}

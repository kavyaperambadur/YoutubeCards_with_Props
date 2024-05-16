function YoutubeCard({imgUrl,title,Views},{days}){
    return(
       <div>
           <img src ={imgUrl}
           alt= "devops image"
           />
           <h4> {title}</h4>
           <div>
               <span> {Views}</span><span>{days}</span>
           </div>
       </div>
    )
   
   }
   
   export default YoutubeCard;
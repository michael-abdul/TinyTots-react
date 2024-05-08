import { Stack } from "@mui/material";
import React from "react";

export default function Advertisement(){
    return (
       <div className="ads-restaurant-frame">
         <Stack flexDirection={"row"}>
         <Stack className="big-video">
         <video 
         className={"big-video"}
         autoPlay={true}
         loop
         muted
         playsInline
         data-video-media=""

         >
            <source type="video/mp4" src="videos/bigVideo.mp4"/>
         </video>
      
         </Stack>
         <Stack className="part-video" flexDirection={"column"}>
         <video 
         className={"part-video"}
         autoPlay={true}
         loop
         muted
         playsInline
         data-video-media=""
         >
            <source type="video/mp4" src="videos/partVideo.mp4"/>
         </video>
         <video 
         className={"part-video"}
         autoPlay={true}
         loop
         muted
         playsInline
         data-video-media=""
         >
            <source type="video/mp4" src="videos/partVideo2.mp4"/>
         </video>
         </Stack>
         </Stack>
       
       </div>
          
    );
}

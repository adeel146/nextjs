import { comments } from "../../../components/comments";

export default function handler(req, res) {
  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
     const comment=req.body.inputcomment
     const newcomment={
         id:Date.now(),
         text:comment
     }
     comments.push(newcomment)
     res.status(201).json(newcomment)
  }
}

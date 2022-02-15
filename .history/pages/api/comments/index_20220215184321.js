import { comments } from "../../../components/comments";

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':{
      res.status(200).json(comments);
    }
    case 'POST':{

    }
      
      break;
  
    default:
      break;
  }
  if (req.method === "GET") {
    
  } else if (req.method === "POST") {
     
  }
}

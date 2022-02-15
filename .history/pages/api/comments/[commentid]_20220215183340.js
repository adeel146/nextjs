import { comments } from "../../../components/comments";


export default function handler(req, res) {
  const { commentid } = req.query

switch (req.method) {
  case  'GET':{
      const comment = comments.find(comment => comment.id === parseInt(commentid))
      res.status(200).json(comment)
  }
  case 'DELETE':{
    const deletedComment = comments.find(
      comment => comment.id === parseInt(commentid)
    )
    const index = comments.findIndex(
      comment => comment.id === parseInt(commentid)
    )
    comments.splice(index, 1)
    res.status(200).json(deletedComment)
  }
  case 'PATCH':{

  }
    
  default:
    break;
}

  else if (req.method === ) {
    
  }
}

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
  ca
    
  default:
    break;
}

  else if (req.method === ) {
    const index = comments.findIndex(
      comment => comment.id === parseInt(commentid)
    )
    const comment=req.body.text
    const id=req.body.id
    const newcomment={
      id,
      text:comment
  }
    comments.splice(index, 1,newcomment)
    res.status(200).json(newcomment)
  }
}

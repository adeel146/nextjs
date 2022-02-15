import { comments } from "../../../components/comments";


export default function handler(req, res) {
  const { commentid } = req.query
  if (req.method === 'GET') {
    const comment = comments.find(comment => comment.id === parseInt(commentid))
    res.status(200).json(comment)
  } else if (req.method === 'DELETE') {
    const deletedComment = comments.find(
      comment => comment.id === parseInt(commentid)
    )
    const index = comments.findIndex(
      comment => comment.id === parseInt(commentid)
    )
    comments.splice(index, 1)
    res.status(200).json(deletedComment)
  }
  else if (req.method === 'PATCH') {
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

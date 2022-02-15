import { comments } from "../../../components/comments";

export default function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return res.status(200).json(comments);
    }
    case "POST": {
      const comment = req.body.inputcomment;
      const newcomment = {
        id: Date.now(),
        text: comment,
      };
      comments.push(newcomment);

      return res.status(201).json(newcomment);
    }
  }
}

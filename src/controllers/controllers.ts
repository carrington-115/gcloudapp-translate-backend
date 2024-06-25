import { Request, Response } from "express";
const translateRoute = async (req: Request, res: Response) => {
  const { text, targetLanguage } = req.query;
  if (!text || !targetLanguage)
    return res.status(404).json({ message: "missing request elements" });
  try {
    const [translations] = await googleTranslateConfig.translate(
      text,
      targetLanguage
    );
    return res.status(200).json({
      message: `Translation completed to ${targetLanguage}`,
      translation: translations,
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Internal server error" });
  }
};

module.exports = { translateRoute };

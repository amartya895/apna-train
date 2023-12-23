import User from '../models/userModel.js'
export const addTravellerController = async (req, resp) => {
  const { userId, travellerDetails } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return resp.status(404).json({ message: "User not found" });
    }

    user.travellers.push(travellerDetails);
    await user.save();

    resp.status(200).json({ message: "Traveller added successfully" });
  } catch (error) {
    console.error(error);
    resp.status(500).json({ message: "Internal Server Error" });
  }
};

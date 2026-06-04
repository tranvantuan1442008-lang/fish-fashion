import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export async function connectDB() {
  try {
    console.log("DNS =", dns.getServers());
    console.log("URI =", process.env.MONGODB_URI);

    if (mongoose.connection.readyState === 1) {
  return;
}
    await mongoose.connect(process.env.MONGODB_URI as string, {
      family: 4,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error FULL:", error);
    throw error;
  }
}

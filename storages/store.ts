import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null, // 1 day
  enableCache: true,
  sync: {},
});

interface Topic {
  name: string;
  isCheck: boolean;
}

const initialTopics: Topic[] = [
  { name: "Compose", isCheck: false },
  { name: "Topic", isCheck: true },
  { name: "Event", isCheck: false },
  { name: "Performance", isCheck: false },
  { name: "Movement", isCheck: false },
  { name: "Dramatic", isCheck: false },
];

// export const saveTopics = async (topics: Topic[]) => {
//   try {
//     // console.log("Saving topics:", topics);
//     await storage.save({
//       key: "topics",
//       data: topics,
//       expires: 1000 * 3600 * 24, // 1 day
//     });
//     console.log("Topics saved successfully");
//   } catch (error) {
//     console.error("Failed to save topics", error);
//   }
// };

export const saveTopics = async () => {
  try {
    // console.log("Saving topics:", topics);
    await storage.save({
      key: "topics",
      data: initialTopics,
      expires: 1000 * 3600 * 24, // 1 day
    });
    console.log("Topics saved successfully");
  } catch (error) {
    console.error("Failed to save topics", error);
  }
};

export const loadTopics = async () => {
  try {
    // console.log("Loading topics");
    const topics = await storage.load({
      key: "topics",
      autoSync: true,
      syncInBackground: true,
    });
    // console.log("Topics loaded successfully", topics);
    return topics;
  } catch (error) {
    console.error("Failed to load topics", error);
    return [];
  }
};

export const removeTopics = async () => {
  try {
    await storage.remove({
      key: "topics",
    });
    console.log("Topics removed successfully");
  } catch (error) {
    console.error("Failed to remove topics", error);
  }
};

export default storage;

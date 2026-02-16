import StudentCard from "@/components/StudentCard";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const data = [
    {
      id: "1",
      name: "Liam",
      role: "Engineer",
      desc: "Automating workflows ⚙️",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&h=400&fit=crop",
      button: "Follow",
      btnStep: 2,
    },
    {
      id: "2",
      name: "James",
      role: "AI Specialist",
      desc: "Creating intelligent solutions 🤖",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop",
      button: "Connect",
      btnStep: 3,
    },
  
    {
      id: "3",
      name: "Emma",
      role: "Product Designer",
      desc: "Protecting Designing products people love ❤️",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop",
      button: "Connect",
      btnStep: 4,
    },
    {
      id: "4",
      name: "Sophia",
      role: "UI/UX Designer",
      desc: "Protecting Crafting user-friendly interfaces 🎨",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&h=400&fit=crop",
      button: "Follow",
      btnStep: 1,
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#36363629" }}>
      <View
        style={{
          height:1000,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 15,
          marginBottom:15,
          padding: 15,
          gap: 12,
        }}
      >
        {data.map((item) => (
          <View key={item.id} style={{ width: "47%" }}>
            <StudentCard {...item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
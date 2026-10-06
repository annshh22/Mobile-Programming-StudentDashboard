import {
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import ScoreCard from "./components/ScoreCard";
import ActionButton from "./components/ActionButton";

export default function App() {
  const [score, setScore] = useState(50);
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>

      <Header title="My Student Portal" />

      <StudentCard
        name="Miann C. Tejano"
        course="Bachelor of Science in Information Technology"
        year="3rd Year"
        section="BSIT-3B"
        email="mianntejano@gmail.com"
        school="University of Science and Technology of Southern Philippines - Panaon Campus"
      />

      <ScoreCard
        score={score}
        result={result}
      />

      <View style={styles.buttonRow}>
        <ActionButton
          title="Add 5 Points"
          variant="headerPink"
          onPress={() => setScore(score + 5)}
        />

        <ActionButton
          title="Remove 5 Points"
          variant="red"
          onPress={() => setScore(score - 5)}
        />
      </View>

      <View style={styles.buttonRow}>
        <ActionButton
          title="Reset Score"
          variant="studentPink"
          onPress={() => {
            setScore(50);
            setResult("");
          }}
        />

        <ActionButton
          title="Submit"
          variant="scorePink"
          onPress={() => {
            if (score >= 70) {
              setResult("Passed");
            } else {
              setResult("Failed");
            }
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  buttonRow: {
    flexDirection: "row",
  },
});
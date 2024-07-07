import { Button } from "react-native";
import Section from "../public/Section";
import AlertMSG from "../../hooks/AlertMSG";

export default function AlertSection() {
  return (
    <>
      <Section>
        <Button
          title="알람 테스트"
          onPress={()=>AlertMSG(
            "high-priority",
            "High Priority Channel",
            "흔들림 경고 알람",
            "폰이 너무 흔들려요! 안정적인 환경에서 디스플레이를 보도록 권장합니다."
          )}
        />
      </Section>
    </>
  );
}

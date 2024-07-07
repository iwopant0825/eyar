import notifee, { AndroidImportance } from "@notifee/react-native";

export default async function AlertMSG(id, name, title, body) {
  const channelId = await notifee.createChannel({
    id: id,
    name: name,
    importance: AndroidImportance.HIGH,
  });

  // 알림을 표시합니다.
  await notifee.displayNotification({
    title: title,
    body: body,
    android: {
      channelId,
      smallIcon: "ic_launcher",
      importance: AndroidImportance.HIGH,
      vibration: {
        type: "default",
      },
      pressAction: {
        id: "default",
      },
    },
  });
}

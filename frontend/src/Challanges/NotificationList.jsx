import { formatDistanceToNow, format } from "date-fns";
import "./nl.css";

const notifications = [
    { id: 1, title: "Server restarted", date: new Date(Date.now() - 1000 * 60 * 3) },
    { id: 2, title: "New announcement posted", date: new Date(Date.now() - 1000 * 60 * 60) },
    { id: 3, title: "Maintenance scheduled", date: new Date(Date.now() - 1000 * 60 * 60 * 24) },
];

export default function NotificationList() {
    return (
        <ul className="notif-list">
            {notifications.map((notif) => (
                <li key={notif.id} className="notif-item">
                    <span className="notif-title">{notif.title}</span>
                    <span className="notif-time" title={format(notif.date, "MMM d, yyyy h:mm a")}>
                        {formatDistanceToNow(notif.date, { addSuffix: true })}
                    </span>
                </li>
            ))}
        </ul>
    );
}

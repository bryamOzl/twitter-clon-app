
export function formatDate(date) {
    const now = new Date();
    const diff = (now - date) / 1000; // diferencia en segundos

    if (diff < 60) {
        return `hace ${Math.floor(diff)}s`;
    } else if (diff < 3600) {
        return `hace ${Math.floor(diff / 60)}m`;
    } else if (diff < 86400) {
        return `hace ${Math.floor(diff / 3600)}h`;
    } else {
        return `hace ${Math.floor(diff / 86400)}d`;
    }
}

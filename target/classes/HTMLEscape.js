function escapeHTML2(string) {
    if (!string) return "";

    return string.replace(/&/g, "&amp;")
        .replace(">", "&gt;")
        .replace("<", "&lt;")
        .replace(/"/g, "&quot;")
        .replace("'", "&#039;");

}
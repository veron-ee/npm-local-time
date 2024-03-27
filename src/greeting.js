export const setGreeting = (element) => {
    const update = () => {
        const html = document.getElementsByTagName("html")[0];
        const nowHours = new Date().getHours();
        if (nowHours >= 0 && nowHours <= 6) {
            element.textContent = "What a great night, isn't it?";
            html.setAttribute(
                "style",
                "background-image: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
            );
        } else if (nowHours > 6 && nowHours <= 11) {
            element.textContent = "Morning, Veronchik! Still sleepy?";
            html.setAttribute(
                "style",
                "background-image: url(https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
            );
        } else if (nowHours > 11 && nowHours <= 18) {
            element.textContent = "What a great day to be miserable again!";
            html.setAttribute(
                "style",
                "background-image: url(https://images.unsplash.com/photo-1621967962337-1125dcaabba0?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
            );
        } else {
            element.textContent = "Wow, hyperfocus time!";
            html.setAttribute(
                "style",
                "background-image: url(https://images.unsplash.com/photo-1612543827278-d19245d6a00d?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
            );
        }
    }

    update();
    requestAnimationFrame(update);
}
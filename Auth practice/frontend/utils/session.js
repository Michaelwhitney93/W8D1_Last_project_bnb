export const postUser = user => (
    $.ajax({
        url: '/api/users',
        method: "POST",
        data: { user },
    })
);


export const postSession = user => (
    $.ajax({
        method: "POST",
        url: '/api/session',
        data: { user },
    })
);

export const deleteSession = () => (
    $.ajax({
        url: '/api/session',
        method: "DELETE",
    })
);
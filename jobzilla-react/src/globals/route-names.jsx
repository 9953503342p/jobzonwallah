export const base = {
    PUBLIC_PRE: "",
    CANDIDATE_PRE: "/candidate",
    EMPLOYER_PRE: "/employer"
}

export const publicUser = {
    INITIAL: "/",
    HOME1: "/index",

    jobs: {
        GRID: "/job-grid",
        LIST: "/job-list",
        DETAIL1: "/job-detail/:jobId",
        APPLY: "/apply-job/:jobId"
    },
    employer: {
        GRID: "/emp-grid",
        LIST: "/emp-list",
        DETAIL1: "/emp-detail/:userId",
    },
    pages: {
        ABOUT:          "/about-us",
        PRICING:        "/pricing",
        ERROR404:       "/error404",
        FAQ:            "/faq",
        CONTACT:        "/contact-us",
        MAINTENANCE:    "/under-maintenance",
        COMING:         "/coming-soon",
        LOGIN:          "/login",
        AFTER_LOGIN:    "/after-login",
        ICONS:          "/icons"
    },
    candidate: {
        GRID: "/can-grid",
        LIST: "/can-list",
        DETAIL1: "/can-detail/:resumeId",
        DETAIL2: "/can-detail/2"
    },
 
}

export const candidate = {
    INITIAL:        "/",
    DASHBOARD:      "/dashboard",
    PROFILE:        "/profile",
    APPLIED_JOBS:   "/applied-jobs",
    RESUME:         "/my-resume",
    SAVED_JOBS:     "/saved-jobs",
    CV_MANAGER:     "/cv-manager",
    ALERTS:         "/job-alerts",
    CHANGE_PASSWORD:"/change-password",
    CHAT:           "/chat"
}

export const employer = {
    INITIAL:        "/",
    DASHBOARD:      "/dashboard",
    PROFILE:        "/profile",
    POST_A_JOB:     "/post-a-job",
    MANAGE_JOBS:    "/manage-jobs",
    CANDIDATES:     "/candidates-list",
    BOOKMARKS:      "/bookmarked-resumes",
    PACKAGES:       "/packages",
    MESSAGES1:      "/messages-style-1",
    MESSAGES2:      "/messages-style-2",
    RESUME_ALERTS:  "/resume-alerts",
    Question:       "/employer/questionandanswer/:_id"
}

export function pubRoute(_route) {
    return base.PUBLIC_PRE + _route;
}

export function empRoute(_route) {
    return base.EMPLOYER_PRE + _route;
}

export function canRoute(_route) {
    return base.CANDIDATE_PRE + _route;
}
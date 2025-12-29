export class AppError extends Error {
    constructor(
        public code: string,
        message: string,
        public status = 500,
        public cause?: unknown
    ) {
        super(message);
    }
}

export class NotFoundResourceError extends AppError {
    constructor(resource: string) {
        super("NOT_FOUND_RESOURCE", `${resource} 페이지 리소스 데이터를 찾을 수 없습니다.`, 404);
    }
}
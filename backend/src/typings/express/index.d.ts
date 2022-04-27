declare namespace Express {
  interface Request {
    userId: Record<number>
    email: Record<string>
  }
}

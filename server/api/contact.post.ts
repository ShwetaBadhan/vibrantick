import mysql from "mysql2/promise";


export default defineEventHandler(async (event) => {
  try {
    // 1. Form data read
    const body = await readBody(event);
    const { name, email, phone, message } = body;

    // 2. Basic validation
    if (!name || !email || !phone || !message) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    // 3. ENV
    const config = useRuntimeConfig();

    // 4. DB connection
    const db = await mysql.createConnection({
      host: config.dbHost,
      user: config.dbUser,
      password: config.dbPassword,
      database: config.dbName,
    });

    // 5. INSERT query
    await db.execute(
      "INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone, message]
    );

    // 6. Response
    return {
      success: true,
      message: "Contact saved successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Server error",
    };
  }
});

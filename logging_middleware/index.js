/**
 * Reusable Log function
 * Integrated directly with your authorization token.
 */
export const Log = async (stack, level, pkg, message) => {
    const url = "http://20.207.122.201/evaluation-service/logs";
    
    const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtZjMyNTJAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMTA3NCwiaWF0IjoxNzc3NzAwMTc0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWVhYzQ0MzMtNzc2Ni00ODZmLWE0MjQtOTg2M2Q1NGNkZGRkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibXVoYW1tZWQgZmFpaGEiLCJzdWIiOiI3YWY3NWU1Ny02YWMwLTQzNDItOWRhZC0zMzJjNmYzMmNkM2EifSwiZW1haWwiOiJtZjMyNTJAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJtdWhhbW1lZCBmYWloYSIsInJvbGxObyI6InJhMjMxMTAwMzAyMDE5OCIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjdhZjc1ZTU3LTZhYzAtNDM0Mi05ZGFkLTMzMmM2ZjMyY2QzYSIsImNsaWVudFNlY3JldCI6Inl2TWpwcmRHYmZFZWJSWGcifQ.1w2AxPm4GKRQJoA-Z5A0ya2hEMWCso7AIetsCavyCrY"; 
  
    const payload = {
      stack: stack.toLowerCase(),
      level: level.toLowerCase(),
      package: pkg.toLowerCase(),
      message: message,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 
          `Bearer ${"yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtZjMyNTJAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMTA3NCwiaWF0IjoxNzc3NzAwMTc0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWVhYzQ0MzMtNzc2Ni00ODZmLWE0MjQtOTg2M2Q1NGNkZGRkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibXVoYW1tZWQgZmFpaGEiLCJzdWIiOiI3YWY3NWU1Ny02YWMwLTQzNDItOWRhZC0zMzJjNmYzMmNkM2EifSwiZW1haWwiOiJtZjMyNTJAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJtdWhhbW1lZCBmYWloYSIsInJvbGxObyI6InJhMjMxMTAwMzAyMDE5OCIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjdhZjc1ZTU3LTZhYzAtNDM0Mi05ZGFkLTMzMmM2ZjMyY2QzYSIsImNsaWVudFNlY3JldCI6Inl2TWpwcmRHYmZFZWJSWGcifQ.1w2AxPm4GKRQJoA-Z5A0ya2hEMWCso7AIetsCavyCrY"}` 
        },
           body: JSON.stringify(payload),
      }); 
  
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Log Sent! ID: ${data.logID}`);
      } else {
        console.error(`❌ Log Failed! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Critical Network Error in Logger:", error);
    }
  };


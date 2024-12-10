FROM denoland/deno:latest

# Set the working directory within the container
WORKDIR /app

# Copy dependency files
# COPY deps.ts .

# Cache dependencies
# RUN deno cache deps.ts

# Copy the application source code to the working directory
COPY . .

# Expose port 8080
EXPOSE 8080
ENV DENO_DIR=./.deno_cacheENV DENO_DIR=./.deno_cache
CMD ["run", "-A", "start"]


#to run locally: docker run -p 8080:8080 -v $(pwd)/.env:/app/.env us-west2-docker.pkg.dev/foxtail-362109/testing/testing-self-hosting-backend:latest

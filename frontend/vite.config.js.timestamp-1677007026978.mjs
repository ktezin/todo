// vite.config.js
import { defineConfig } from "file:///C:/Users/kaant/Web%20Projects/todo/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/kaant/Web%20Projects/todo/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on("error", (err, _req, _res) => {
            console.log("proxy error", err);
          });
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            console.log("Sending Request to the Target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req, _res) => {
            console.log(
              "Received Response from the Target:",
              proxyRes.statusCode,
              req.url
            );
          });
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrYWFudFxcXFxXZWIgUHJvamVjdHNcXFxcdG9kb1xcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxca2FhbnRcXFxcV2ViIFByb2plY3RzXFxcXHRvZG9cXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2thYW50L1dlYiUyMFByb2plY3RzL3RvZG8vZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW3JlYWN0KCldLFxuXHRzZXJ2ZXI6IHtcblx0XHRvcGVuOiB0cnVlLFxuXHRcdHByb3h5OiB7XG5cdFx0XHRcIi9hcGlcIjoge1xuXHRcdFx0XHR0YXJnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCIsXG5cdFx0XHRcdGNoYW5nZU9yaWdpbjogdHJ1ZSxcblx0XHRcdFx0c2VjdXJlOiBmYWxzZSxcblx0XHRcdFx0Y29uZmlndXJlOiAocHJveHksIF9vcHRpb25zKSA9PiB7XG5cdFx0XHRcdFx0cHJveHkub24oXCJlcnJvclwiLCAoZXJyLCBfcmVxLCBfcmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInByb3h5IGVycm9yXCIsIGVycik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cHJveHkub24oXCJwcm94eVJlcVwiLCAocHJveHlSZXEsIHJlcSwgX3JlcykgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTZW5kaW5nIFJlcXVlc3QgdG8gdGhlIFRhcmdldDpcIiwgcmVxLm1ldGhvZCwgcmVxLnVybCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cHJveHkub24oXCJwcm94eVJlc1wiLCAocHJveHlSZXMsIHJlcSwgX3JlcykgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0XHRcdFwiUmVjZWl2ZWQgUmVzcG9uc2UgZnJvbSB0aGUgVGFyZ2V0OlwiLFxuXHRcdFx0XHRcdFx0XHRwcm94eVJlcy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRcdFx0XHRyZXEudXJsXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJULFNBQVMsb0JBQW9CO0FBQ3hWLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsV0FBVyxDQUFDLE9BQU8sYUFBYTtBQUMvQixnQkFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLE1BQU0sU0FBUztBQUN0QyxvQkFBUSxJQUFJLGVBQWUsR0FBRztBQUFBLFVBQy9CLENBQUM7QUFDRCxnQkFBTSxHQUFHLFlBQVksQ0FBQyxVQUFVLEtBQUssU0FBUztBQUM3QyxvQkFBUSxJQUFJLGtDQUFrQyxJQUFJLFFBQVEsSUFBSSxHQUFHO0FBQUEsVUFDbEUsQ0FBQztBQUNELGdCQUFNLEdBQUcsWUFBWSxDQUFDLFVBQVUsS0FBSyxTQUFTO0FBQzdDLG9CQUFRO0FBQUEsY0FDUDtBQUFBLGNBQ0EsU0FBUztBQUFBLGNBQ1QsSUFBSTtBQUFBLFlBQ0w7QUFBQSxVQUNELENBQUM7QUFBQSxRQUNGO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

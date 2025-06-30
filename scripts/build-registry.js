// scripts/build-registry.js
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

async function buildRegistry() {
  try {
    console.log("Building registry...");

    // Read the main registry.json
    const registryPath = path.join(process.cwd(), "registry.json");
    const registryConfig = JSON.parse(fs.readFileSync(registryPath, "utf8"));

    // Ensure output directories exist
    const outputDir = path.join(process.cwd(), "public", "r");
    const componentsDir = path.join(outputDir, "components");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }

    // Build index.json (main registry file)
    const indexData = {
      ...registryConfig,
      items: registryConfig.items.map((item) => ({
        name: item.name,
        type: item.type,
        title: item.title,
        description: item.description,
      })),
    };

    fs.writeFileSync(
      path.join(outputDir, "index.json"),
      JSON.stringify(indexData, null, 2)
    );

    console.log("✅ Created index.json");

    // Run shadcn build for individual components
    try {
      execSync("npx shadcn build", { stdio: "inherit" });
      console.log("✅ Generated component files");
    } catch (error) {
      console.warn(
        "⚠️ shadcn build failed, creating component files manually..."
      );

      // Manual component file generation
      registryConfig.items.forEach((item) => {
        const componentData = {
          name: item.name,
          type: item.type,
          title: item.title,
          description: item.description,
          files: item.files,
        };

        fs.writeFileSync(
          path.join(componentsDir, `${item.name}.json`),
          JSON.stringify(componentData, null, 2)
        );

        console.log(`✅ Created ${item.name}.json`);
      });
    }

    console.log("\n🎉 Registry build complete!");
    console.log("Generated files:");
    console.log("- public/r/index.json");

    // List generated component files
    if (fs.existsSync(componentsDir)) {
      const componentFiles = fs.readdirSync(componentsDir);
      componentFiles.forEach((file) => {
        console.log(`- public/r/components/${file}`);
      });
    }
  } catch (error) {
    console.error("❌ Build failed:", error.message);
    process.exit(1);
  }
}

buildRegistry();

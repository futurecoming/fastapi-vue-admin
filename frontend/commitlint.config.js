// @ts-check
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新增一个功能（feature）
        "fix", // 修复一个bug
        "docs", // 文档变更（documentation）
        "style", // 代码格式（不影响功能，例如空格、分号等格式修正）
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "perf", // 性能优化
        "test", // 增加测试
        "del", // 删除删除代码/文件
        "build", // 变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）
        "ci", // 变更CI/CD（例如scopes: Travis、Circle等）
        "chore", // 构建过程或辅助工具的变动
        "revert" // 回退
      ]
    ],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"]
  }
};

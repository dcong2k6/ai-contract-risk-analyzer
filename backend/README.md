# AI Contract Risk Analyzer

Ứng dụng web sử dụng AI để phát hiện và phân tích rủi ro trong hợp đồng.

## Công nghệ

### Frontend
- React
- TypeScript
- Vite

### Backend
- Python
- FastAPI
- uv
- pytest
- Ruff

### AI
- Machine Learning
- LLM

---

## Cấu trúc dự án

```text
ai-contract-risk-analyzer/
├── backend/
├── frontend/
├── data/
├── docs/
├── .github/
├── .gitignore
└── README.md
```

---

## Yêu cầu

Cần cài:

- Python 3.12+
- Node.js
- npm
- uv
- Git

---

## Cách chạy Backend

Mở Terminal:

```bash
cd backend
uv sync
uv run fastapi dev src/backend/main.py
```

Backend:

```text
http://localhost:8000
```

Swagger:

```text
http://localhost:8000/docs
```

Kiểm tra Backend:

```text
http://localhost:8000/health
```

Kết quả:

```json
{
  "status": "ok"
}
```

---

## Cách chạy Frontend

Mở **Terminal mới**:

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Nếu PowerShell báo lỗi `npm.ps1`:

```powershell
npm.cmd install
npm.cmd run dev
```

---

## Chạy toàn bộ hệ thống

Cần mở 2 Terminal:

**Terminal 1:**

```bash
cd backend
uv run fastapi dev src/backend/main.py
```

**Terminal 2:**

```bash
cd frontend
npm run dev
```

Sau đó truy cập:

```text
http://localhost:5173
```

Frontend sẽ gọi Backend thông qua API.

---

## Kiểm tra code

### Backend

```bash
cd backend
uv run pytest
uv run ruff check .
```

### Frontend

```bash
cd frontend
npm run build
```

---

## Git Workflow

Tạo branch riêng cho mỗi chức năng:

```bash
git checkout -b feature/<ten-chuc-nang>
```

Ví dụ:

```bash
git checkout -b feature/frontend-skeleton
```

Commit:

```bash
git add .
git commit -m "feat: add frontend skeleton"
git push -u origin feature/frontend-skeleton
```

Sau đó tạo Pull Request vào `main`.

## Commit Convention

```text
feat:       Thêm chức năng
fix:        Sửa lỗi
test:       Thêm test
docs:       Cập nhật tài liệu
refactor:   Tái cấu trúc code
ci:         Thay đổi CI/CD
chore:      Cấu hình/bảo trì
```

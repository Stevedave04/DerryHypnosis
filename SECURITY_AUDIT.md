# Security Audit Report - Derry Hypnosis Website

**Date:** 2026-01-13
**Application:** Derry Hypnosis - Client-side React SPA
**Auditor:** Claude Code Security Analysis

---

## Executive Summary

This security audit assessed the Derry Hypnosis web application for common security vulnerabilities. The application is a client-side React single-page application built with Vite. Overall, the codebase demonstrates good security practices with no critical vulnerabilities identified. However, several medium and low-priority security improvements are recommended.

**Risk Level Summary:**
- 🔴 Critical: 0
- 🟠 High: 1
- 🟡 Medium: 4
- 🟢 Low: 3

---

## Findings

### 🟠 HIGH PRIORITY

#### 1. Missing .env Files in .gitignore
**File:** `.gitignore:1-25`
**Risk Level:** HIGH
**Description:** The `.gitignore` file does not explicitly include `.env` files. While `*.local` is present (which covers `.env.local`), standard `.env` files could be accidentally committed to version control.

**Evidence:**
```
# Current .gitignore does not include:
.env
.env.*
```

**Impact:** If a developer creates a `.env` file containing the `GEMINI_API_KEY` or other sensitive credentials, it could be committed to the repository and exposed in version control history.

**Recommendation:**
Add the following lines to `.gitignore`:
```
# Environment variables
.env
.env.*
!.env.example
```

---

### 🟡 MEDIUM PRIORITY

#### 2. No Subresource Integrity (SRI) for CDN Resources
**File:** `index.html:6,17,105-111`
**Risk Level:** MEDIUM
**Description:** The application loads multiple external resources from CDNs without Subresource Integrity (SRI) hashes:
- Tailwind CSS from `cdn.tailwindcss.com`
- React, React-DOM, and Lucide from `esm.sh`
- Google Analytics from `googletagmanager.com`
- Calendly widget from `assets.calendly.com`

**Impact:** If any of these CDN providers are compromised, malicious JavaScript could be injected into the application without detection.

**Recommendation:**
1. For production, consider bundling dependencies instead of using CDN imports
2. If CDNs must be used, implement SRI hashes:
```html
<script
  src="https://cdn.example.com/library.js"
  integrity="sha384-hash-here"
  crossorigin="anonymous">
</script>
```

#### 3. No Content Security Policy (CSP)
**File:** `index.html:1-120`
**Risk Level:** MEDIUM
**Description:** The application does not implement a Content Security Policy header or meta tag.

**Impact:** Without CSP, the application is more vulnerable to XSS attacks, clickjacking, and other injection attacks.

**Recommendation:**
Add a CSP meta tag in `index.html` or configure CSP headers on the hosting platform:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://esm.sh https://www.googletagmanager.com https://assets.calendly.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https: blob:;
  connect-src 'self' https://www.google-analytics.com;
  frame-src https://calendly.com https://www.google.com;
">
```

#### 4. Missing Security Headers Configuration
**Risk Level:** MEDIUM
**Description:** No security headers configuration file found for deployment platforms (Netlify, Vercel, Cloudflare Workers).

**Impact:** Missing security headers expose the application to various attacks:
- `X-Frame-Options`: Clickjacking protection
- `X-Content-Type-Options`: MIME-sniffing protection
- `Strict-Transport-Security`: Force HTTPS
- `Referrer-Policy`: Control referrer information leakage
- `Permissions-Policy`: Restrict browser features

**Recommendation:**
Create a `_headers` file (for Netlify/Cloudflare Pages) or configure headers in deployment settings:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
```

#### 5. Dynamic Script Injection in Booking Component
**File:** `components/Booking.tsx:12-19`
**Risk Level:** MEDIUM
**Description:** The Booking component dynamically creates and injects a script tag for Calendly:

```typescript
const script = document.createElement('script');
script.src = "https://assets.calendly.com/assets/external/widget.js";
document.body.appendChild(script);
```

**Impact:** While the URL is hardcoded (reducing risk), dynamic script injection bypasses some CSP protections and makes the code harder to audit.

**Recommendation:**
1. Load the Calendly script statically in `index.html` if always needed
2. If dynamic loading is required, use CSP with nonce or hash-based allowlisting
3. Add error handling for script load failures

---

### 🟢 LOW PRIORITY

#### 6. Google Analytics ID Exposed
**File:** `index.html:12`
**Risk Level:** LOW
**Description:** Google Analytics tracking ID `G-0F1PBT4FD1` is hardcoded in the HTML.

**Impact:** This is generally acceptable as GA IDs are meant to be public. However, it allows competitors to track your analytics or spam your analytics with fake data.

**Recommendation:**
- No immediate action required (this is standard practice)
- Consider implementing server-side analytics for sensitive tracking
- Monitor GA for suspicious traffic patterns

#### 7. Missing HTTPS Enforcement in Links
**File:** Multiple components
**Risk Level:** LOW
**Description:** External image links from Unsplash use HTTPS, but there's no explicit enforcement mechanism.

**Impact:** Low risk as all external resources currently use HTTPS, but future additions might inadvertently use HTTP.

**Recommendation:**
- Configure CSP's `upgrade-insecure-requests` directive
- Use a linter rule to prevent HTTP URLs in code

#### 8. No Rate Limiting on Client Side
**File:** `components/Booking.tsx`
**Risk Level:** LOW
**Description:** The Calendly booking widget has no client-side rate limiting or bot protection.

**Impact:** Potential for spam bookings or DoS attempts on the booking system.

**Recommendation:**
- Calendly should handle this server-side
- Consider adding CAPTCHA for additional protection if spam becomes an issue
- Monitor booking patterns for suspicious activity

---

## Positive Security Findings ✅

The following security best practices are already implemented:

1. ✅ **No XSS Vulnerabilities**: No use of `dangerouslySetInnerHTML`, `innerHTML`, or `eval()`
2. ✅ **No Hardcoded Secrets**: No API keys, passwords, or tokens found in source code
3. ✅ **HTTPS for External Resources**: All CDN and external resources use HTTPS
4. ✅ **No Direct DOM Manipulation**: React handles all rendering safely
5. ✅ **No SQL/NoSQL Queries**: Client-side only application with no database access
6. ✅ **No Sensitive Data Storage**: No localStorage/sessionStorage usage
7. ✅ **Input Sanitization**: All user input handled through Calendly (third-party)
8. ✅ **No Server-Side Code**: Client-side only reduces attack surface
9. ✅ **Modern Dependencies**: Using latest stable versions of React (19.2.3), TypeScript (5.8.2), Vite (6.2.0)
10. ✅ **No .env Files Committed**: Verified via git history check

---

## Dependency Security

### Current Dependencies
```json
{
  "lucide-react": "0.460.0",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "react-router-dom": "6.22.3"
}
```

**Status:** No package-lock.json file exists, preventing automated vulnerability scanning.

**Recommendation:**
```bash
npm install --package-lock-only
npm audit
```

---

## OWASP Top 10 Assessment

| Vulnerability | Status | Notes |
|---------------|--------|-------|
| A01:2021 - Broken Access Control | ✅ N/A | Client-side only, no authentication |
| A02:2021 - Cryptographic Failures | ✅ Low Risk | No sensitive data storage |
| A03:2021 - Injection | ✅ Low Risk | No SQL/NoSQL, XSS protected by React |
| A04:2021 - Insecure Design | 🟡 Medium | Missing CSP and security headers |
| A05:2021 - Security Misconfiguration | 🟡 Medium | No security headers configured |
| A06:2021 - Vulnerable Components | ⚠️ Unknown | No package-lock.json for audit |
| A07:2021 - ID & Auth Failures | ✅ N/A | No authentication system |
| A08:2021 - Software & Data Integrity | 🟡 Medium | No SRI for CDN resources |
| A09:2021 - Security Logging | 🟢 Low | GA provides basic monitoring |
| A10:2021 - SSRF | ✅ N/A | No server-side requests |

---

## Recommended Action Plan

### Immediate (This Week)
1. ✅ **Add .env to .gitignore** - Prevents accidental secret commits
2. ✅ **Create package-lock.json** - Enable dependency vulnerability scanning
3. ✅ **Add security headers** - Configure via hosting platform

### Short Term (This Month)
4. ✅ **Implement CSP** - Add Content Security Policy
5. ✅ **Add SRI hashes** - For critical CDN resources
6. ✅ **Set up npm audit** - Regular dependency vulnerability checks

### Long Term (Next Quarter)
7. ✅ **Bundle dependencies** - Replace CDN imports with npm packages for better control
8. ✅ **Add monitoring** - Implement security monitoring and alerting
9. ✅ **Regular audits** - Schedule quarterly security reviews

---

## Testing Recommendations

1. **Automated Security Scanning**
   ```bash
   npm audit
   npm outdated
   ```

2. **Static Analysis**
   - ESLint with security plugins
   - SonarQube or similar SAST tools

3. **Manual Testing**
   - Pen testing by security professional
   - Browser security header checks (securityheaders.com)
   - SSL/TLS configuration testing (ssllabs.com)

---

## Conclusion

The Derry Hypnosis application demonstrates good fundamental security practices with no critical vulnerabilities. The primary concerns are around defense-in-depth measures (CSP, security headers, SRI) rather than active exploitable vulnerabilities.

Implementing the recommended high and medium priority fixes will significantly improve the security posture of the application.

**Overall Security Score: 7/10** (Good)

---

## References

- [OWASP Top 10 2021](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy](https://content-security-policy.com/)
- [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)

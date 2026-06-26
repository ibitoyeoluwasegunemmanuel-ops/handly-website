import { FounderDashboardData, Report } from './types';
import { format } from 'date-fns';

export type ReportType = 'daily' | 'weekly' | 'monthly' | 'investor';

interface ReportTemplate {
  title: string;
  subtitle: string;
  sections: string[];
}

const reportTemplates: Record<ReportType, ReportTemplate> = {
  daily: {
    title: 'Daily Report',
    subtitle: 'Real-time Platform Metrics',
    sections: ['Summary', 'KPIs', 'App Analytics', 'Marketplace', 'Growth'],
  },
  weekly: {
    title: 'Weekly Report',
    subtitle: 'Week-over-Week Performance',
    sections: ['Executive Summary', 'Weekly KPIs', 'App Performance', 'Marketplace Growth', 'User Insights', 'Action Items'],
  },
  monthly: {
    title: 'Monthly Report',
    subtitle: 'Month-over-Month Growth',
    sections: ['Executive Summary', 'Financial Summary', 'App Analytics', 'Marketplace Metrics', 'User Retention', 'Geographic Insights', 'Growth Initiatives'],
  },
  investor: {
    title: 'Investor Update',
    subtitle: 'HANDLY Growth & Traction',
    sections: ['Company Overview', 'Key Metrics', 'Unit Economics', 'Growth Metrics', 'Runway & Burn', 'Milestones Achieved', 'Next Priorities'],
  },
};

// Generate CSV Report
export function generateCSVReport(data: FounderDashboardData, reportType: ReportType): string {
  let csv = 'HANDLY Platform Report\n';
  csv += `Report Type: ${reportType.toUpperCase()}\n`;
  csv += `Generated: ${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}\n\n`;

  // KPIs Section
  csv += '=== KEY PERFORMANCE INDICATORS ===\n';
  csv += 'Metric,Value\n';
  csv += `GMV (USD),$${data.kpis.gmv.toLocaleString()}\n`;
  csv += `Revenue (USD),$${data.kpis.revenue.toLocaleString()}\n`;
  csv += `MRR (USD),$${data.kpis.mrr.toLocaleString()}\n`;
  csv += `ARR (USD),$${data.kpis.arr.toLocaleString()}\n`;
  csv += `Active Users,${(data.marketplace.total_customers + data.marketplace.total_workers + data.marketplace.total_businesses).toLocaleString()}\n`;
  csv += `Customers,${data.marketplace.total_customers.toLocaleString()}\n`;
  csv += `Workers,${data.marketplace.total_workers.toLocaleString()}\n`;
  csv += `Businesses,${data.marketplace.total_businesses.toLocaleString()}\n`;
  csv += `Net Retention,${(data.kpis.net_retention * 100).toFixed(1)}%\n`;
  csv += `Burn Rate,$${data.kpis.burn_rate.toLocaleString()}/month\n`;
  csv += `Runway,${data.kpis.runway_months.toFixed(1)} months\n\n`;

  // App Analytics
  csv += '=== APP ANALYTICS ===\n';
  csv += 'Platform,Active Users,DAU,MAU,Retention (Day 1),Retention (Day 7),Retention (Day 30),Uninstalls\n';
  data.app_analytics.forEach(app => {
    csv += `${app.platform},${app.active_users},${app.dau},${app.mau},${(app.retention_day_1 * 100).toFixed(1)}%,${(app.retention_day_7 * 100).toFixed(1)}%,${(app.retention_day_30 * 100).toFixed(1)}%,${app.uninstalls}\n`;
  });
  csv += '\n';

  // Marketplace Metrics
  csv += '=== MARKETPLACE METRICS ===\n';
  csv += 'Metric,Value\n';
  csv += `Total Transactions,${data.marketplace.total_transactions.toLocaleString()}\n`;
  csv += `Jobs Posted,${data.marketplace.active_jobs + data.marketplace.jobs_completed}\n`;
  csv += `Jobs Completed,${data.marketplace.jobs_completed.toLocaleString()}\n`;
  csv += `Average Job Value,$${data.marketplace.avg_job_value.toFixed(2)}\n`;
  csv += `Worker Satisfaction,${(data.marketplace.worker_satisfaction * 100).toFixed(1)}%\n`;
  csv += `Customer Satisfaction,${(data.marketplace.customer_satisfaction * 100).toFixed(1)}%\n\n`;

  // Top Cities
  csv += '=== TOP CITIES ===\n';
  csv += 'City,Users,Revenue\n';
  data.top_cities.forEach(city => {
    csv += `${city.city},${city.users},$${city.revenue.toLocaleString()}\n`;
  });
  csv += '\n';

  // Top Categories
  csv += '=== TOP CATEGORIES ===\n';
  csv += 'Category,Jobs,Revenue\n';
  data.top_categories.forEach(cat => {
    csv += `${cat.category},${cat.jobs},$${cat.revenue.toLocaleString()}\n`;
  });
  csv += '\n';

  // Daily Data
  csv += '=== DAILY DATA ===\n';
  csv += 'Date,Users,Revenue,Jobs,Transactions\n';
  data.daily_data.slice(-30).forEach(day => {
    csv += `${day.date},${day.users},$${day.revenue.toLocaleString()},${day.jobs},${day.transactions}\n`;
  });

  return csv;
}

// Generate HTML Report (for PDF conversion)
export function generateHTMLReport(data: FounderDashboardData, reportType: ReportType): string {
  const template = reportTemplates[reportType];
  const date = format(new Date(), 'MMMM dd, yyyy');

  let html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; line-height: 1.6; }
    .page { max-width: 8.5in; height: 11in; margin: 0 auto; padding: 0.5in; background: white; }
    .page-break { page-break-after: always; }

    .header { border-bottom: 3px solid #1e40af; padding-bottom: 1.5rem; margin-bottom: 2rem; }
    .header h1 { color: #1e40af; font-size: 2.5rem; margin-bottom: 0.25rem; }
    .header p { color: #666; font-size: 1.1rem; }
    .date { color: #999; font-size: 0.9rem; margin-top: 1rem; }

    .section { margin-bottom: 2rem; }
    .section h2 { color: #1e40af; font-size: 1.5rem; border-bottom: 2px solid #e5e7eb; padding-bottom: 0.5rem; margin-bottom: 1rem; }

    .kpi-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
    .kpi-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1rem; }
    .kpi-label { color: #666; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .kpi-value { font-size: 1.8rem; font-weight: bold; color: #1e40af; margin-top: 0.5rem; }

    table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
    th { background: #1e40af; color: white; padding: 0.75rem; text-align: left; }
    td { padding: 0.75rem; border-bottom: 1px solid #e5e7eb; }
    tr:nth-child(even) { background: #f9fafb; }

    .chart-placeholder { background: #f3f4f6; border: 2px dashed #d1d5db; border-radius: 0.5rem; padding: 2rem; text-align: center; color: #999; margin: 1.5rem 0; }

    .footer { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; color: #999; font-size: 0.85rem; }
  </style>
</head>
<body>
  <div class="page">
    <!-- Header -->
    <div class="header">
      <h1>${template.title}</h1>
      <p>${template.subtitle}</p>
      <div class="date">Generated on ${date}</div>
    </div>

    <!-- Executive Summary -->
    <div class="section">
      <h2>Executive Summary</h2>
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">Total GMV</div>
          <div class="kpi-value">$${data.kpis.gmv.toLocaleString()}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Monthly Revenue</div>
          <div class="kpi-value">$${data.kpis.mrr.toLocaleString()}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Active Users</div>
          <div class="kpi-value">${(data.marketplace.total_customers + data.marketplace.total_workers + data.marketplace.total_businesses).toLocaleString()}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Growth Rate</div>
          <div class="kpi-value">${(data.growth_rate * 100).toFixed(1)}%</div>
        </div>
      </div>
    </div>

    <!-- User Metrics -->
    <div class="section">
      <h2>User Metrics</h2>
      <table>
        <tr>
          <th>User Type</th>
          <th>Count</th>
          <th>% of Total</th>
        </tr>
        <tr>
          <td>Customers</td>
          <td>${data.marketplace.total_customers.toLocaleString()}</td>
          <td>${((data.marketplace.total_customers / (data.marketplace.total_customers + data.marketplace.total_workers + data.marketplace.total_businesses)) * 100).toFixed(1)}%</td>
        </tr>
        <tr>
          <td>Workers</td>
          <td>${data.marketplace.total_workers.toLocaleString()}</td>
          <td>${((data.marketplace.total_workers / (data.marketplace.total_customers + data.marketplace.total_workers + data.marketplace.total_businesses)) * 100).toFixed(1)}%</td>
        </tr>
        <tr>
          <td>Businesses</td>
          <td>${data.marketplace.total_businesses.toLocaleString()}</td>
          <td>${((data.marketplace.total_businesses / (data.marketplace.total_customers + data.marketplace.total_workers + data.marketplace.total_businesses)) * 100).toFixed(1)}%</td>
        </tr>
      </table>
    </div>

    <!-- Marketplace Activity -->
    <div class="section">
      <h2>Marketplace Activity</h2>
      <table>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Active Jobs</td>
          <td>${data.marketplace.active_jobs.toLocaleString()}</td>
        </tr>
        <tr>
          <td>Jobs Completed</td>
          <td>${data.marketplace.jobs_completed.toLocaleString()}</td>
        </tr>
        <tr>
          <td>Total Transactions</td>
          <td>${data.marketplace.total_transactions.toLocaleString()}</td>
        </tr>
        <tr>
          <td>Average Job Value</td>
          <td>$${data.marketplace.avg_job_value.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <!-- Unit Economics -->
    <div class="section">
      <h2>Unit Economics</h2>
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">CAC</div>
          <div class="kpi-value">$${data.kpis.cac.toFixed(2)}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">LTV</div>
          <div class="kpi-value">$${data.kpis.ltv.toFixed(2)}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">LTV:CAC Ratio</div>
          <div class="kpi-value">${data.kpis.ltv_cac_ratio.toFixed(1)}:1</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Payback Period</div>
          <div class="kpi-value">${data.kpis.payback_period_months.toFixed(1)}mo</div>
        </div>
      </div>
    </div>

    <!-- Top Cities -->
    <div class="section">
      <h2>Top Cities</h2>
      <table>
        <tr>
          <th>City</th>
          <th>Users</th>
          <th>Revenue</th>
        </tr>
        ${data.top_cities.map(city => `
        <tr>
          <td>${city.city}</td>
          <td>${city.users.toLocaleString()}</td>
          <td>$${city.revenue.toLocaleString()}</td>
        </tr>
        `).join('')}
      </table>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>HANDLY - Founder Command Center Report</p>
      <p>This report contains confidential information and is for authorized recipients only.</p>
    </div>
  </div>
</body>
</html>
`;

  return html;
}

// Export to CSV
export function downloadCSV(csv: string, reportType: ReportType) {
  const filename = `HANDLY_${reportType}_report_${format(new Date(), 'yyyy-MM-dd')}.csv`;
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Export to PDF (requires html2pdf library)
export async function downloadPDF(html: string, reportType: ReportType) {
  try {
    const element = document.createElement('div');
    element.innerHTML = html;

    const filename = `HANDLY_${reportType}_report_${format(new Date(), 'yyyy-MM-dd')}.pdf`;

    // Using html2pdf library (install: npm install html2pdf.js)
    const opt = {
      margin: 10,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    };

    // This would require html2pdf.js library
    console.log('PDF export ready. Filename:', filename);
  } catch (error) {
    console.error('Failed to generate PDF:', error);
  }
}

// Generate mock report data (for demo)
export function generateMockReport(reportType: ReportType): FounderDashboardData {
  const today = new Date();
  const daily_data = [];

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    daily_data.push({
      date: format(date, 'yyyy-MM-dd'),
      users: Math.floor(1000 + Math.random() * 500),
      revenue: Math.floor(5000 + Math.random() * 10000),
      jobs: Math.floor(20 + Math.random() * 30),
      transactions: Math.floor(50 + Math.random() * 100),
    });
  }

  return {
    kpis: {
      gmv: 250000,
      revenue: 75000,
      net_retention: 0.95,
      burn_rate: 50000,
      runway_months: 24,
      mrr: 25000,
      arr: 300000,
      cac: 50,
      ltv: 1500,
      ltv_cac_ratio: 30,
      payback_period_months: 2,
    },
    app_analytics: [
      {
        platform: 'ios',
        total_downloads: 5000,
        active_users: 2800,
        dau: 1200,
        mau: 2300,
        retention_day_1: 0.75,
        retention_day_7: 0.45,
        retention_day_30: 0.25,
        uninstalls: 200,
        crash_rate: 0.01,
        avg_session_duration: 8.5,
        updated_at: new Date().toISOString(),
      },
      {
        platform: 'android',
        total_downloads: 8000,
        active_users: 4200,
        dau: 1800,
        mau: 3500,
        retention_day_1: 0.72,
        retention_day_7: 0.42,
        retention_day_30: 0.22,
        uninstalls: 350,
        crash_rate: 0.015,
        avg_session_duration: 7.8,
        updated_at: new Date().toISOString(),
      },
    ],
    marketplace: {
      total_customers: 2500,
      total_workers: 1800,
      total_businesses: 450,
      active_jobs: 320,
      jobs_completed: 2840,
      total_transactions: 5680,
      gross_revenue: 250000,
      platform_revenue: 75000,
      avg_job_value: 44,
      worker_satisfaction: 0.92,
      customer_satisfaction: 0.88,
      updated_at: new Date().toISOString(),
    },
    web_analytics: {
      total_visitors: 45000,
      unique_visitors: 12000,
      total_page_views: 89000,
      avg_session_duration: 4.2,
      bounce_rate: 0.35,
      top_countries: [
        { country: 'Nigeria', count: 8500 },
        { country: 'Ghana', count: 2100 },
        { country: 'Kenya', count: 1200 },
      ],
      top_cities: [
        { city: 'Lagos', count: 5000 },
        { city: 'Accra', count: 1500 },
        { city: 'Nairobi', count: 900 },
      ],
      device_breakdown: { desktop: 35000, mobile: 8000, tablet: 2000 },
      traffic_sources: [
        { source: 'organic', count: 20000 },
        { source: 'direct', count: 15000 },
        { source: 'referral', count: 10000 },
      ],
    },
    growth_rate: 0.25,
    top_cities: [
      { city: 'Lagos', users: 5000, revenue: 45000 },
      { city: 'Accra', users: 1500, revenue: 12000 },
      { city: 'Nairobi', users: 900, revenue: 8000 },
    ],
    top_categories: [
      { category: 'Design', jobs: 450, revenue: 65000 },
      { category: 'Development', jobs: 380, revenue: 85000 },
      { category: 'Marketing', jobs: 290, revenue: 35000 },
    ],
    daily_data,
  };
}

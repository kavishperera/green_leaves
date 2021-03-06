/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.report.report_viewer;

import com.mac.green_leaves.v1.report.report_viewer.model.Report;
import com.mac.green_leaves.v1.report.report_viewer.model.ReportGroup;
import com.mac.green_leaves.v1.zutil.SecurityUtil;
import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Mohan
 */
@RestController
@CrossOrigin
@RequestMapping("/api/v1/report/report-viewer")
public class ReportViewerController {

    @Autowired
    private ReportViewerService reportViewerService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<ReportGroup> listReports() {
        return reportViewerService.getReportList();
    }

    @RequestMapping(value = "/report-parameters", method = RequestMethod.POST)
    public List<String> getReportParameters(@RequestBody Report report) throws JRException {
        return reportViewerService.getReportParameters(report);
    }

    @RequestMapping(value = "/report", method = RequestMethod.GET)
    public void viewReport(HttpServletResponse httpServletResponse, @RequestParam HashMap<String, String> map) throws JRException, IOException, SQLException, ParseException {
        Integer branch = SecurityUtil.getCurrentUser().getBranch();
        reportViewerService.writePdfReport(httpServletResponse, map, branch);
    }
}

package io.insee.dev.k8sonboarding.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.insee.dev.k8sonboarding.configuration.properties.ClusterProperties;
import io.insee.dev.k8sonboarding.configuration.properties.UiProperties;
import io.insee.dev.k8sonboarding.view.AppConfiguration;

@RestController
@RequestMapping("/api/public/configuration")
public class ConfigurationController {

    @Autowired
    ClusterProperties clusterProperties;

    @Autowired
    UiProperties uiProperties;

    @GetMapping
    public AppConfiguration getConfiguration() {
        final AppConfiguration appConfiguration = new AppConfiguration();
        appConfiguration.setResource(uiProperties.getClientId());
        appConfiguration.setAuthority(uiProperties.getAuthority());
        appConfiguration.setClientId(uiProperties.getClientId());
        appConfiguration.setGroupFilter(uiProperties.getGroupFilter());
        appConfiguration.setUserNamespaceEnabled(uiProperties.getUserNamespaceEnabled());
        return appConfiguration;
    }

}
